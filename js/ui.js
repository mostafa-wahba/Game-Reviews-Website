export class Ui{
    constructor(){
        this.displayData(games)
        this.displayDetails(details)
        this.loading(document)
    }
    displayData(games){  
            let gamesContainer=``
            for (let index = 0; index < games.length; index++) {
                gamesContainer +=`<div class="col">
                <div id="${games[index].id}" class="card h-100 bg-transparent" role="button">
                    <div id="${games[index].id}" class="card-body info">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover"
                                src=${games[index].thumbnail}>
                        </figure>
                        <div class="card-content">
                            <figcaption>
                                <div class="hstack justify-content-between align-items-center">
                                    <h3 class="h6 small">${games[index].title}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                </div>
                                <p class="card-text small text-center opacity-50">${games[index].short_description}</p>
                            </figcaption>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-c">${games[index].genre}</span>
                                <span class="badge badge-c">${games[index].platform}</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            `;
            }
            $('#pagedata').html(gamesContainer)
    }
    displayDetails(details){
        $("#imgDetails").attr("src",details.thumbnail)
        $("#details h3").html(`Title: ${details.title}`)
        $("#details p").eq(0).html(`Category: <span class="badge text-bg-info"> ${details.genre}</span>`)
        $("#details p").eq(1).html(`Platform: <span class="badge text-bg-info"> ${details.platform}</span>`)
        $("#details p").eq(2).html(`Status: <span class="badge text-bg-info"> ${details.status}</span>`)
        $("#details p").eq(3).html(details.description)
        $("#details a").attr("href",details.game_url)
    }
    open(){
        $("#details").removeClass("d-none").addClass("d-block")
        $("#games").removeClass("d-block").addClass("d-none")
    }
    close(){
        $("#games").removeClass("d-none").addClass("d-block")
        $("#details").removeClass("d-block").addClass("d-none")
    }
    loading(location){
        $(location).ready(()=>{
            $("#loading").fadeOut(1000,()=>{
                $("body").css("overflow","auto")
            })
        })
    }
    }
