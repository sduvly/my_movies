import {useState} from 'react'
import styled from 'styled-components'
function Form({currentMovie}){
    const [istickets, setIstickets] = useState({
        user_id: 5,
        movie_id: currentMovie.id,
        price: 0
    })
    function handleChange(e){
        e.preventDefault()
        setIstickets({...istickets, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        console.log(e)
        fetch("http://localhost:3000/tickets", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(istickets)
        })
        .then(resp => resp.json())
        .then(n => console.log(n))
    
    }
    return(
        <>
           <FormContainer>
               {currentMovie ? <h1>Buy atcket for {currentMovie.title}</h1> : null}
            <form onSubmit={handleSubmit } className="new-recipe-form">
                <InputBox>
                    <span className="Details">Price</span>
                    <input 
                    placeholder="Enter Price..."
                    name="price"
                    onChange={handleChange} 
                    value={istickets.price}
                  
                    required />
                </InputBox> 
                
                
                <New>
                 <button type="submit" >"Post New Jobs"</button>
               </New>
            </form>
            
        </FormContainer>
        </>
    )
}

export default Form

const FormContainer = styled.div`
    
    margin-top: 50px;
    padding: 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50vh;
    font-size: 18px;
    //background: linear-gradient(135deg, #ff9966, #ff5e62);
    
    
    `
    const InputBox = styled.div`
    display: flex;
    width:(100% / 2 - 30px);
    padding: 2px;
    margin-bottom: 10px;
    & input, textarea{
        height: 20px;
        width: 100%;
        outline: none;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding-left: 15px;
        font-size: 15px;
        border-bottom-width: 2px;
        transition: all 0.3s ease;
        // border-color: #ff9966;
        
    }
    
    & span{
        align-items: center;
        padding-right:10px;
    }
    
    
    `
    
    const New = styled.div`
    
    width:100%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    & input{
    font-size: 20px;
    font-weight: 500;
    color: black;
    border-color: #ff9966;
    border: none;
    border-radius: 5px;
    background: linear-gradient(135deg, #ff9966, #ff5e62);
    
    }
    & input:hover{
        background: linear-gradient(-135deg, #ff9966, #ff5e62); 
    }
    
    
    `