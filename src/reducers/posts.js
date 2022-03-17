import { ADD_POST} from "../actions"
import { UPDATE_POST} from "../actions"
import { REMOVE_POST} from "../actions"


const posts = (state = [], action) => {
    const { type, postid, name, postText, postImage} = action
  
    switch (type) {
      
      case REMOVE_POST:
        console.log("remove fun called")
        let removedstate = state.filter(obj => obj.postid != postid)
        return removedstate
      

      case UPDATE_POST:
        let newstate = state.map(obj => {
          console.log(obj.postid, "this is objec postid")
          console.log(postid, "this is postid passed")

          if (obj.postid == postid){
            return {postid, name, postText, postImage}
          }
          return obj
        }
      )

      console.log(newstate)
      return newstate

      case ADD_POST:
        return [...state, {postid, name, postText, postImage}]
      default:
        return state
    }




  }
  export default posts