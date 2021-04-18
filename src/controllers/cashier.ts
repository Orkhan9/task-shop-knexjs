import { Request, Response} from 'express';
import {connection} from "../connection/connection";

export const getTargetCashiers1= async (req: Request, res: Response)=>{
	try {
		const over5yearsUsers=await connection('cashiers')
			.where('years_of_experience', '>', 5).select('id');
		let id:number;
		over5yearsUsers.forEach(async x=>{
			console.log(x);
			const data=await connection('cash_register_cashier')
				.where('cashier_id',  x.id)
				.select('cash_register_id');
			console.log(data);
		});
		//res.status(200).json({data});
	}catch (e) {
		res.status(404).json(e.message);
	}
};

export const getCashiers= async (req: Request, res: Response)=>{
	try {
		const data= await connection.select().from('cashiers');
		res.status(200).json({data});
	}catch (e) {
		res.status(404).json(e.message);
	}
};

export const getCashier= async (req: Request, res: Response)=>{
	const id=req.params.id;
	try {
		const data=await connection('cashiers')
			.where({id});
		if(data.length<1){
			res.status(404).json({message:`this cashier with id - ${id} doesn't exist`});
		}
		res.status(200).json({data});
	}catch (e) {
		res.status(404).json(e.message);
	}
};

export const createCashier= async (req: Request, res: Response)=>{
	try {
		const cashier=req.body;
		await connection('cashiers').insert(cashier);
		res.status(201).json({message:'cashier is created'});
	}catch (e) {
		res.status(404).json(e.message);
	}
};

export const updateCashier= async (req: Request, res: Response)=>{
	const id=req.params.id;
	console.log(id);
	try {
		const cashier=req.body;
		await connection('cashiers')
			.where({id})
			.update(cashier);
		res.status(200).json({message:'cashier is updated'});
	}catch (e) {
		res.status(404).json(e.message);
	}
};

export const deleteCashier= async (req: Request, res: Response)=>{
	const id=req.params.id;
	try {
		await connection('cashiers')
			.where({id})
			.del();
		res.status(200).json({message:'cashier is deleted'});
	}catch (e) {
		res.status(404).json(e.message);
	}
};
