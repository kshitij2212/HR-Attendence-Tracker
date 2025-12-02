import prisma from "../db.js";

// Create the new department.
const createDepartment = async (req,res)=>{

    try{
        const {name,description} = req.body

        const existingDepartment = await prisma.department.findUnique({
            where:{name}
        });

        if(existingDepartment){
            return res.status(400).json({message:"Department already exists."})
        };

        const department = await prisma.department.create({
            data:{
                name:name,
                description:description
            }
        });

        return res.status(201).json({message:"Department created Successfully.",department})



    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"})
        
    }

    

}



// Get all Department 


const getAllDepartment = async (req,res)=>{

    try{
        const {name,description,employees} = req.body

        const allDepartmnet = await prisma.department.findMany({
            include:{
                employees:true,
            }
            
        });

        return res.status(200).json(allDepartmnet)
    }

    catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"})

    }
    
}



// get Departmen by id

const getDepartmentbyID = async (req,res)=>{

    try{
        const {id}  = req.params

        const departmentbyId = await prisma.department.findUnique({
            where:{id:Number(id)},
            include:{employees:true}
        });

        if(!departmentbyId){
            return res.status(400).json({message:"Department not found."})
        }

        return res.status(200).json(departmentbyId)

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"})

    };
}

// Delete department 

const deleteDepartment = async (req,res)=>{

    try{
        const {id} = req.params

        await prisma.department.delete({
            where:{id:Number(id)}
        })

        return res.status(200).json({message:"Department deleted successfully."})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"})

    };
} ;
// Get Public Departments (for registration)
const getPublicDepartments = async (req, res) => {
    try {
        const departments = await prisma.department.findMany({
            select: {
                id: true,
                name: true
            }
        });
        return res.status(200).json(departments);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

export { createDepartment, getAllDepartment, getDepartmentbyID, deleteDepartment, getPublicDepartments };