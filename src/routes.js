import { Router } from "express";
import api from './url';

const routes = new Router();


routes.get("/", async (req, res) => {
 try{
  const Result = await api.get('/users');
  
  return res.json(Result.data);
 }
 catch (e) {
   return res.status(400).json({error:`${e}`});
 }

});
routes.get("/api/users", async (req, res) => {
  try{
   const {since} = req.query;
   const Result = await api.get(`/users?since=${since}`);
   
   return res.json(Result.data);
  }
  catch (e) {
    return res.status(400).json({error:`${e}`});
  }
 });
 routes.get("/api/users/:username/details", async (req, res) => {
  try{
   const {username} = req.params;
   const Result = await api.get(`/users/${username}`);
   
   return res.json(Result.data);
  }
  catch (e) {
    return res.status(400).json({error:`${e}`});
  }
 });
 routes.get("/api/users/:username/repos", async (req, res) => {
  try{
   const {username} = req.params;
   const Result = await api.get(`/users/${username}/repos`);
   
   return res.json(Result.data);
  }
  catch (e) {
    return res.status(400).json({error:`${e}`});
  }
 });
export default routes;
