import {useState} from 'react'

function User(){
    const [ispassword, setIspassword] = useState("")

    function edit(e){
        e.preventDefault()
        fetch('http://localhost:3000/users/5', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ispassword)
        })
        .then(resp => resp.json())
        .then(update => console.log(update))

    }
    
  
    return(
        <>
           <form onSubmit={edit}>
      <input
       
        type="text"
        name="username"
        value="Sduvly"
        
      />
      <label htmlFor="date">Password:</label>
      <input
       
        type="password"
        name="password"
        value={ispassword}
        onChange={(e) => setIspassword(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
        </>
    )
}

export default User