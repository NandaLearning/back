import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const getData = async (req,res) => {
    try{
        const data = await prisma.biodata.findMany()
        res.send(data)
    }catch (error){
        console.log(error)
    }
}

export const getDataById = async (req,res) => {
    try{
        const { id } = req.params;
        const data = await prisma.biodata.findUnique({
            where:{
                id: Number(id)
            }
        })
        res.send(data)
    }catch (error){
        console.log(error)
    }
}


export const createDataById = async (req,res) => {
    try{
        const { nama , usia , gender} = req.body;
        const data = await prisma.biodata.create({
            data:{
                nama:nama,
                usia:Number(usia),
                gender:gender
            }
        })
        res.send(data)
    }catch (error){
        console.log(error)
    }
}


export const updateDataById = async (req,res) => {
    try{
        const { id } = req.params;
        const { nama,usia,gender } = req.body;
        const data = await prisma.biodata.update({
            where:{
                id:Number(id)
            },
            data:{
                nama:nama,
                usia:Number(usia),
                gender:gender
            }
        })
        res.send(data)
    }catch (error){
        console.log(error)
    }
}


export const deleteDataById = async (req,res) => {
    try{
        const { id } = req.params;
        const data = await prisma.biodata.delete({
            where:{
                id:Number(id)
            }
        })
        res.send(data)
    }catch (error){
        console.log(error)
    }
}