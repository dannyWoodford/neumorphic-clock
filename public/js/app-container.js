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

const appContainerWood = document.querySelector(".app-container-wood")

for (let i = 0; i < 4; i++) {
    appContainerWood.insertAdjacentHTML("afterbegin", `
        <div class="app-wood">
            <div class="app-inner-wood">
                <div class="app-icon-wood"></div>
            </div>
        </div>
    `)
}