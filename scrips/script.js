displayPizza("json/pizza.json");
displayPasta("json/pasta.json");
displayDrinks("json/drik.json");

async function displayPizza(file)
{
    var f = await fetch(file);
    var a = await f.json();
    d = document.getElementById("pizzany");

    var pizza = "";
    pizza = createPizza(a.pizza);

    d.innerHTML = pizza;
}

function createPizza(element)
{
    return `
    <div class="number">1.</div>
        <div class="name"><b>${element[0].name}</b></div>
        <div class="ingredients">${element[0].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[0].bigImage}" target="_blank">
                <img src="${element[0].smallImage}"
                    alt="${element[0].alt}" title="${element[0].title}" width="100"></a>
                <figcaption>${element[0].caption}</figcaption>
        </figure>
        <button onclick="klikKob()" type="button">Put i kurven</button>
    </div>

        <div class="number">2.</div>
        <div class="name"><b>${element[1].name}</b></div>
        <div class="ingredients">${element[1].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[1].bigImage}" target="_blank">
                <img src="${element[1].smallImage}"
                    alt="${element[1].alt}" title="${element[1].title}" width="100"></a>
                <figcaption>${element[1].caption}</figcaption>
        </figure>
         <button onclick="klikKob()" type="button">Put i kurven</button>
    </div>
    
    <div class="number">3.</div>
        <div class="name"><b>${element[2].name}</b></div>
        <div class="ingredients">${element[2].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[2].bigImage}" target="_blank">
                <img src="${element[2].smallImage}"
                    alt="${element[2].alt}" title="${element[2].title}" width="100"></a>
                <figcaption>${element[2].caption}</figcaption>
        </figure>
         <button onclick="klikKob()" type="button">Put i kurven</button>
    </div>
    `
}

async function displayPasta(file)
{
    var f = await fetch(file);
    var a = await f.json();
    d = document.getElementById("pastany");

    var pasta = "";
    pasta = createPasta(a.pasta);

    d.innerHTML = pasta;
}

function createPasta(element)
{
    return `
    <div class="number">1.</div>
        <div class="name"><b>${element[0].name}</b></div>
        <div class="ingredients">${element[0].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[0].bigImage}" target="_blank">
                <img src="${element[0].smallImage}"
                    alt="Pizza" title="${element[0].title}" width="100"></a>
                <figcaption>${element[0].caption}</figcaption>
        </figure>
    </div>

        <div class="number">2.</div>
        <div class="name"><b>${element[1].name}</b></div>
        <div class="ingredients">${element[1].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[1].bigImage}" target="_blank">
                <img src="${element[1].smallImage}"
                    alt="Pizza" title="${element[1].title}" width="100"></a>
                <figcaption>${element[1].caption}</figcaption>
        </figure>
    </div>
    `
}

async function displayDrinks(file)
{
    var f = await fetch(file);
    var a = await f.json();
    d = document.getElementById("drikny");

    var drikke = "";
    drikke = createPasta(a.drikke);

    d.innerHTML = drikke;
}

function createDrinks(element)
{
    return `
    <div class="number">1.</div>
        <div class="name"><b>${element[0].name}</b></div>
        <div class="ingredients">${element[0].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[0].bigImage}" target="_blank">
                <img src="${element[0].smallImage}"
                    alt="Pizza" title="${element[0].title}" width="100"></a>
                <figcaption>${element[0].caption}</figcaption>
        </figure>
    </div>

        <div class="number">2.</div>
        <div class="name"><b>${element[1].name}</b></div>
        <div class="ingredients">${element[1].ingredients}</div>
        <div class="image">
        <figure>
                <a href="${element[1].bigImage}" target="_blank">
                <img src="${element[1].smallImage}"
                    alt="Pizza" title="${element[1].title}" width="100"></a>
                <figcaption>${element[1].caption}</figcaption>
        </figure>
    </div>
    `
}
