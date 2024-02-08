const rm=()=>{
	let rm=document.querySelector("#rm");
     rm.remove();
}
	let search=document.querySelector("#search");
	search.addEventListener("click",()=>{
			let container=document.querySelector("#cont");
			let searchin=document.querySelector("#searchf").value;
			fetch(`https://restcountries.com/v3.1/name/${searchin}`)
			.then(resp => resp.json())
			.then(res=>{let [data]=res;
				console.dir(data);
				const HtmlData=`<div id="rm" class="card-conta">
						<div class="card-main">
							<h1>${data.flag}</h1>
							<div class="card-content">
								<h3>Country name:${data.name.official}</h3>
								<p>Capital:${data.capital}</p><br>
								<p>Region:${(data.region)}</p><br>
								<p>Population:${data.population}</p><br>
								<p>Borders:${data.borders}</p><br>
								<button id="rm" type="button" class="btncss" onclick="rm()">Remove</button>
							</div>
						</div>
					</div>`;
				container.insertAdjacentHTML("afterbegin",HtmlData);
			})
			.catch((err)=>{alert(err);})
        	
});
