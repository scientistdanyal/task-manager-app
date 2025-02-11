const express = require('express');
const Task = require('../models/task');

// controller function 


// get all tasks
const getAllTasks = async (req, res)=>{
    try{

        // will fetch all the tasks
        const tasks = await Task.find({})
        res.status(200).json({tasks})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// create task

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
        if(!task){
            return res.status(404).json({msg: "No task found"})
        }
    }catch (error) {
        res.status(500).json({msg: "Error"}) // general server status code
    }

    
}

// get single task
const getSingleTask = async (req, res)=>{
    try{
        // destructure the id from the request params
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        res.status(200).json({task})
    }catch (error) {
        res.status(404).json({msg: "No task with the id"})
    }
    
}

// delete task
const deleteTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task){
            return res.status(404).json({msg: "No task with the id"})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg: "Error"})
    }
}


// update task
const updateTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task){
            return res.status(404).json({msg: "No task with the id"})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: "Error"})
}}

module.exports = { 
    getAllTasks,
    createTask,
    getSingleTask,
    deleteTask,
    updateTask,
}