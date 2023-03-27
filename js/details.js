import {Ui} from './ui.js';
let ui = new Ui()
export class Details{
    constructor(){
        this.details=details
        this.getGame()
        this.closeGame()
    }
    getGame(){
        $("#pagedata").click(async(e)=>{
            ui.loading("#details")
            let card =Array.from($(e.target).parentsUntil(".col"));
            let id =$(card.pop()).attr("id")
            this.details=await this.fetchData(id)
            ui.displayDetails(this.details)
            ui.open()
        })
    };
    closeGame(){
        $("#closeBtn").click(()=>{
            ui.close()
        })
    }
        
    async fetchData(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e6a2b934fmsh150821d5722b5d9p152729jsn443a6a698cc3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        response = await response.json();
        return response
    }
}


