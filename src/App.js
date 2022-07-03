
import {useDispatch, useSelector} from "react-redux"
import {addword, removeword, resetword} from "./redux/word"
import {saveword} from "./redux/save"
import Grid from "./components/Grid"
import Data from "./data"

function App() {
  const {word} =  useSelector(state => state.word);
  const {words} = useSelector(state => state.save);
  const solution = Data.solution
  const dispatch = useDispatch();

  const handleColor = (id) => {
    var boks = document.getElementById(id);
   
    if (boks.style.backgroundColor == "rgb(233, 190, 78)"){
      boks.style.backgroundColor = "rgb(238, 233, 190)"
    }

    else if (boks.style.backgroundColor == "rgb(233, 190, 79)") {
      boks.style.backgroundColor = "rgb(55, 49, 26)"
      }

    else if (boks.style.backgroundColor == "rgb(55, 49, 26)") {
    boks.style.backgroundColor = "rgb(233, 190, 79)"
    }
   

    else {
      boks.style.backgroundColor = "rgb(233, 190, 78)";
    }

  }
 
  
  const handleClick = (value, id) => {
    handleColor(id);
    let newLetter = {id, value}
    var ids = word.map((word)=> word.id)

    if(ids.includes(newLetter.id ) ) {
      dispatch(removeword(newLetter))
    }

    else {
      dispatch(addword(newLetter));
      
    };
  };  
  
 const submitWord = ()=> {
  console.log(solution)
  console.log(word)
  console.log(solution.includes(word))
    if(word.length == 5) {
        if(true) {
          dispatch(saveword(word));
          dispatch(resetword());
          var buds = document.getElementsByClassName("bud");
          var duds =  document.getElementsByClassName("dud");
          for(let i = 0; i < buds.length; i++ ) {
            document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
            
          }
          for(let i = 0; i < duds.length; i++ ) {
            document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
          }
          }
          else{
          dispatch(resetword());
              var buds = document.getElementsByClassName("bud");
              var duds =  document.getElementsByClassName("dud");
            for(let i = 0; i < buds.length; i++ ) {
              document.getElementById(buds[i].id).style.backgroundColor = "rgb(238, 233, 190)"
              
            }
            for(let i = 0; i < duds.length; i++ ) {
              document.getElementById(duds[i].id).style.backgroundColor = "rgb(55, 49, 26)"
            }
            }
      
    }
    

    else if (word.length > 5){
      
      alert("imcorrect word 1");
      dispatch(resetword())
    }

    else{
      alert("imcorrect word  2")
      dispatch(resetword());
      return
    }
    
 }

 const handleHint = ()=> {
  console.log(solution)
  console.log(words)
  for(let i = 0; i < solution.length; i++){
    if(solution[i] == word){
      console.log("e work for here")
    }
    else{
      console.log("gbass gboss")
    }
  }
  }
 



  
  // THE RETURN STARTS HERE ....LOL
  return (
   <div className="App">
    <h2>EXPIRIENCE THE JUNGLE</h2>
     <Grid handleClick={handleClick}/>
     <div className="buttons">
     <button onClick={submitWord}>check</button>
     <button onClick={handleHint}>Hint</button>
     </div>
   </div>
  );

  }


export default App