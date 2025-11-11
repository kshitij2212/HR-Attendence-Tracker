import prisma from "../db.js"
import bcrypt from "bcrypt"

// Create employee 

const createEmployee = async(req,res)=>{

    try{
        const {name,email,password,role,departmentId} = req.body

    const existingmail = await prisma.employee.findUnique({
        where:{email:email}
    })

    if(existingmail){
        return res.status(400).json({message:"Email alredy existed."})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const employee = await prisma.employee.create({
        data:{
            name,
            email,
            password:hashedPassword,
            role,
            departmentId
        }
    })

    return res.status(201).json({message:"Employee create successfully",employee})
    
    }   

    catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
    }


}
export {createEmployee}