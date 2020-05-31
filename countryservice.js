// Filename: backend/countryservice.jsw (web modules need to have a .jsw extension)
import {fetch} from 'wix-fetch'

export function getWeather(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=069dfa80f78d01cfb74858a0bf7d07c1';
	return fetch(url, {method:'get'})
		.then(resoponse => resoponse.json());
}
export function getsupplier() {
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=meonj-LnjiPRxGdMWYQ_osr_IYdGN1fm9vBSamUjf_UpoumhS0kUvjGQT0oiKjLsk6a1bfxlMFTIdSJGUiLcF9_bjZ6d4yLFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBd1IaP6z0-lZkAncU9ljkBDqP2SrfdOL0lWKu1kQh4ESCUT1hX2bp3bRX5qqbqMfmnb8wsYfrZt&lib=MVTevrsClO2HXVJFhKHPCJ-akjTqKiDXn";
	return fetch(url, {method:'get'})
		.then(resoponse => resoponse.json());
}



//Use the following code in one of your site's front-end files
//to call the multiply function from backend/countryservice.jsw.

/* 
import {multiply} from 'backend/countryservice';

$w.onReady(function () {
	
	multiply(4,5).then(product => {
	    console.log(product);
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});
});
*/
