import express from "express";
import {
	getCashiers,
	createCashier,
	updateCashier,
	deleteCashier,
	getCashier,
	getTargetCashiers1
} from "../controllers/cashier";

export const routerCashier = express.Router();

routerCashier.get('/cashier', getCashiers);
routerCashier.get('/getTargetCashiers1', getTargetCashiers1);
routerCashier.get('/cashier/:id', getCashier);
routerCashier.post('/cashier', createCashier);
routerCashier.put('/cashier/:id', updateCashier);
routerCashier.delete('/cashier/:id', deleteCashier);
