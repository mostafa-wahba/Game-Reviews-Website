import {Ui} from './ui.js';
let ui = new Ui()
import {Details} from "./details.js"
let details = new Details()
export class Games{
    constructor(){
        this.category=$(".navbar-nav .nav-item .nav-link")
        this.games =games;
        this.getCategory()
        this.defualtCategory("MMORPG")
    }
    async defualtCategory(MMORPG){
        let d_api = await this.fetchData(MMORPG)
        ui.displayData(d_api)
    }
    getCategory(){
        this.category.click(async (e)=>{
            let category =$(e.target).text()
            $(".navbar-nav .nav-item .active").removeClass('active');
            $(e.target).addClass('active');
            this.games =await this.fetchData(category)
            console.log(this.games);
            ui.displayData(this.games)
            
        })   
    }
    async fetchData(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e6a2b934fmsh150821d5722b5d9p152729jsn443a6a698cc3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        response = await response.json();
        return response
    }
}