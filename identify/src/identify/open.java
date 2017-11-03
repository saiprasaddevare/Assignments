
package identify;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class open {
    
      
        String filename,readFile;
        BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader bufferfile;
        FileReader file;
        String javapattern1 = "(f.+)?(s.+)?([ps].+)([sp].+)?(f.+)?(v.+)+(m.+)?(S.+)?[^{]|//.*|\\*.*|[\\w\\s]*\\*/";
        String javapattern_token = "";
        String rubypattern1 = "(d.*[f])+\\w*(.*^:)|e.[d]|#";
        //|(p.*[ced])(s.*[c])
        //|(p.+)(s.+)?([vifdbs].+)+(m.+)|
        String pythonpattern1 ="d.[f]+\\w*(.*:)|#|(i.[f])[\\w]*:";
        String flag;
   
        open() throws FileNotFoundException, IOException  //
        {
           try
           {
                System.out.println("ENTER THE FILENAME");
                filename =  buffer.readLine();
                file = new FileReader(filename); 
                System.out.println("\n --------------------THE PROGRAM FOR "+filename+" START FROM HERE-----------------------\n");
                bufferfile = new BufferedReader(file);
                
              
                      
                   /* while ((readFile = bufferfile.readLine())!= null) //outer while
                    {  
                        System.out.println(readFile);
                     */    
                        
                         System.out.println("\nThe Different Protocol considered for identifying the language is \n1.Function \n2.Single Line Comment");  
                         System.out.println("\nThe protocol match from "+filename+" file are :-\n");
                       
                            while ((readFile = bufferfile.readLine())!= null) //inner while 1
                            {
                                 
                         
                                    Pattern java_pattern =  Pattern.compile(javapattern1);  
                                    Pattern ruby_pattern =  Pattern.compile(rubypattern1);
                                    Pattern python_pattern= Pattern.compile(pythonpattern1);
                                    
                                    Matcher java_match = java_pattern.matcher(readFile);
                                    Matcher ruby_match = ruby_pattern.matcher(readFile); 
                                    Matcher python_match = python_pattern.matcher(readFile); 
                                                                            
                                    if (java_match.find())//inner while 1
                                    {                                        
                                        //String group = match.pattern().toString();
                                       
                                        //System.out.println(group);
                                        
                                            System.out.println(java_match.group());
                                            flag = "java";
                                                            
                                    }//if
                                    
                                    else if(ruby_match.find())//else if 1
                                    {
                                       //String group2 = match2.pattern().toString();
                                       System.out.println(ruby_match.group());
                                       flag = "ruby";
                                       
                                    
                                    }//else if 1          
                                    
                                    else if(python_match.find())// else if 2
                                    {
                                        System.out.println(python_match.group());
                                        flag = "python";
                                    }//else if 2*/
                                    
                            } // inner while 1                       
               // }   //outher while
               switch (flag) {
                   case "java":
                       System.out.println("\nThe File Named "+filename+" is a --|JAVA PROGRAM|--\n");
                       break;
                   case "ruby":
                       System.out.println("\nThe File Named "+filename+" is a --|RUBY PROGRAM|--\n");
                       break;
                   case "python":
                       System.out.println("\nThe File Named "+filename+" is a --|PYTHON PROGRAM|--\n");
                       break;
                   default:
                       break;
               }
                            
        file.close();
        } //open constructor
        
        catch(Exception e)
        {
            System.out.println("\nREPORTING ERROR MANUALLY\n"+e);
        }
        
        }
        
}//open class
