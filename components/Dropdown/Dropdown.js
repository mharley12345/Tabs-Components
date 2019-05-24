 
class Dropdown {
  constructor(element) {
                        
    // Assign this.element to the dropdown element                
                                                                                                          
    this.element= element;                                                                                
                                                                                                          
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");                                         
                                                                                                      
    // assign the reference to the ".dropdown-content" class found in the dropdown element                                                                                                                            
    this.content = this.element.querySelector('.dropdown-content')                                                                                                                                                   
                                                                                                                                                                                                                    
    // Add a click handler to the button reference and call the toggleContent method.                                                                                                                               
                                                                                                                                                                                                                  
    this.button.addEventListener('click', () => this.toggleContentOn())                                                                                                                                         
                                                                                           
  }                                                               
                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                     
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   
  toggleContentOn() {                                                                                                                                                                                                                                                  
    var myTweenMax = document.querySelector('.dropdown-content');                                                                                                                         
                                                                                                                                                                                                                                                               
    // Toggle the ".dropdown-hidden" class off and on                                                                                                                                                                                                                
    this.content.classList.toggle('dropdown-hidden');                                                                                                                                                                                                               
    // stretch                                                                                                                                                                                                                                                      
    TweenMax.to(myTweenMax, 10, {x:1135, y:1, scale:1, skewX:0, rotation:0,},this.button.addEventListener('click',() => this.restart()));                                                                                                                  
                                                                                                                                                                                                                                                                  
  }                                    
                                       
 restart() {                                                                                                                                                                                                                                                  
    var myTweenMax2 = document.querySelector('.dropdown-content');                                                                                                                                                                                                                                                             
   TweenMax.to(myTweenMax2, 10, {x:0,y:0,scale:1,skewX:0,rotation:0})                                                                                                                                          
   console.log('i work')                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                          
  };                                                                                                                                                                                                         
                                                                                                                                                                        
}                                                                                                                                                       
                                                                                                                                                                                                                                                            
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                       
                                                                                                                                                       
                                                                                                                                                      
                                                                                                                                                      
           
                        
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                              
                                                                                                                                                                                                                          
                                                                                                                                                                                                                      
                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                     
// Nothing to do here, just study what the code is doing and move on to the Dropdown class                                                     
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));                           
                                                                                                                
                                                                                                             
                                                                                                            