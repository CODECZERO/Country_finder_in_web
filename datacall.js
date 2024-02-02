const req=new XMLHttpRequest();
const rm=()=>{
	let rm=document.querySelector("#rm");
     rm.remove();
}

const refer=()=>{
	let search=document.querySelector("#search");
	let container=document.querySelector("#cont");
	let searchin=document.querySelector("#searchf").value;
    req.open('GET',`https://restcountries.com/v3.1/name/${searchin}`);   
    req.send();
    req.addEventListener('load',function(){
        let [data]=JSON.parse(this.responseText);
        const HtmlData=`<div id="rm" class="card-conta">
            	<div class="card-main">
                	<h1>${data.flag}</h1>
                	<div class="card-content">
                    	<h3>Country name:${data.name.official}</h3>
                    	<p>Capital:${data.capital}</p><br>
                    	<p>NativeName:${for(f in data.name.nativeName){f.official}}</p><br>
                    	<p>Population:${data.population}</p><br>
                    	<p>Borders:${data.borders}</p><br>
                    	<button id="rm" type="button" class="btncss" onclick="rm()">Remove</button>
                	</div>
            	</div>
        	</div>`;
            	container.insertAdjacentHTML("afterbegin",HtmlData);
        });


}

