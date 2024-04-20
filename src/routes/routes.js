import { Router } from "express";
import {
    getAllPopularFilms,
    getPopularFilmsId,
    getAllPopularTv,
    getPopularTvId,
    getAllBoxOffice,
    getBoxOfficeId
} from  '../controllers/films.controllers.js';

const  filmsRouter = Router();

filmsRouter.get("/popular-films", getAllPopularFilms)
filmsRouter.get("/popular-films/:id", getPopularFilmsId)
filmsRouter.get("/popular-tvs", getAllPopularTv)
filmsRouter.get("/popular-tvs/:id", getPopularTvId)
filmsRouter.get("/box-office", getAllBoxOffice)
filmsRouter.get("/box-office/:id", getBoxOfficeId)

export {filmsRouter}

