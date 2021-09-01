import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./PhotoForm.css"


function PhotoForm(props) {

const {handleMyDogPhotoSubmit, handlePhotoFormChange, myDoggieImage} = useContext(PawsContext) 
console.log("props:", props)
return(
    <div key={props.fave.id} id={props.fave.id} >
        <form name="photoForm" onSubmit={(e)=>handleMyDogPhotoSubmit(e, props.fave.id, props.fave.name, props.fave.address, props.fave.city, props.fave.phone, props.fave.isHearted, myDoggieImage)}>
            <p>Add URL for image of you & your dog enjoying this restaurant:</p>
                    <input
                        className= "photo-input"
                        type="text"
                        value={myDoggieImage}
                        onChange={(e, id)=>handlePhotoFormChange(id, e.target.value)}
                    />
            <button  key={props.fave.id} id={props.fave.id} type="submit">Save My Doggie & Me Photo</button>
                        
        </form>
    
        
    </div>
)
}

export default PhotoForm



//    handleEdit = (e, id) => {
//         e.preventDefault()
//         // console.log("EDIT button was clicked!")
//         const editId = id
//         console.log("this is editId:", editId)
//         // console.log("editedId", editId)
//         // alert(e.target.editTitle.value)
//         // alert(e.target.editImgUrl.value)

//         const editedThing = {
//             title: e.target.editTitle.value,
//             imgUrl: e.target.editImgUrl.value,
//             description: e.target.editDescription.value
//         }

//         console.log("editedThing:", editedThing)

//         axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
//             .then(res => {
//                 const editedThing = res.data
//                 console.log("2nd console(after .then) editedThing:", editedThing)
//                 //reset editForm values
//                 this.setState({
//                     editTitle: "",
//                     editImgUrl: "",
//                     editDescription: ""
//                 })
//                 this.getUglyThingsData()
//             })
//             .catch(error => console.log(error))
//     }

//  <div key={this.props.item._id} id={this.props.item._id} index={this.props.index}>
//                                 <Wrapper >
//                                     <FormTitle>Edit This Ugly Thing:</FormTitle>

//                                     <UglyForm onSubmit={(e) => { handleEdit(e, this.props.item._id); this.toggleEdit(e) }}>

//                                         <UglyInput
//                                             defaultValue={this.props.item.title}
//                                             name="editTitle"
//                                             onChange={handleChange}
//                                         />
//                                         <UglyInput
//                                             defaultValue={this.props.item.imgUrl}
//                                             name="editImgUrl"
//                                             onChange={handleChange}

//                                         />
//                                         <UglyInput
//                                             defaultValue={this.props.item.description}
//                                             name="editDescription"
//                                             onChange={handleChange}
//                                         />
//                                         <CancelAndEditButton>Save Edited Ugly Thing</CancelAndEditButton>
//                                         <CancelAndEditButton onClick={this.toggleEdit} className="cancel">Cancel Edit</CancelAndEditButton>
//                                     </UglyForm>


//                                 </Wrapper>
