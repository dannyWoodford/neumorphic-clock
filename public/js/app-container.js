const appContainer = document.querySelector(".app-container")

for (let i = 0; i < 4; i++) {
    appContainer.insertAdjacentHTML("afterbegin", `
        <div class="app">
            <div class="app-inner">
                <div class="app-icon"></div>
            </div>
        </div>
    `)
}

const notesContainer = document.querySelector(".notes-container")

for (let i = 0; i < 2; i++) {
    notesContainer.insertAdjacentHTML("afterbegin", `
        <div class="note">
            <div class="note-top">
                <div class="time">11:43 AM</div>
                    
                    <a href="#" class="menu">
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                        <div class="pix"></div>
                    </a>
            </div>
            <div class="note-bottom">
                <p id="day-initial">S M T W T F S</p>
            </div>
        </div>
    `)
}


