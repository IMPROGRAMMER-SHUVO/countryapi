const rescountyrs=(searchtext)=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(Response=>Response.json())
    .then(data=>displaycountrys(data))
}
const displaycountrys=courties=>{
    const countirsCointainer=document.getElementById('allcountries')
//for (const country of courties){}
//console.log(courties)//
courties.forEach(country => {
 const countryDiv=document.createElement('div');
 countryDiv.classList.add('country');
 
 countryDiv.innerHTML=`
 <h3>Name:${country.name.common}</h3>
 <h4>Capital:${country.capital? country.capital[0] :'No capital in this Country'}</h4>
 <img  id="imgs"src='${country.flags.png} ' alt="" >
<button onclick="newcode('${country.cca2}')"> API</button>
 ` 
countirsCointainer.appendChild(countryDiv)

    console.log(country)
});

}
const newcode=code=>{
//https://restcountries.com/v3.1/alpha/{code}
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>showcountrydetails(data[0]))
}
const showcountrydetails= country=>{
 const detail=document.getElementById('countryy')
 detail.innerHTML=`
 <h4> Name:${country.name.common}</h4>
 `
}




rescountyrs()


const names=() =>{
    fetch('https://restcountries.com/v3.1/region/europe')
    .then(res=>res.json())
    .then(data=>console.log(data))
}







names()