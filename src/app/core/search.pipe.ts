import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
  	console.log('search tite',items);
    if(!items) return [];
    if(!searchText) return items;
	searchText = searchText.toLowerCase();
	console.log(searchText);
	console.log(Object.keys(items[0]));
	const prop = Object.keys(items[0]);
	// for(let i in prop){
	// 	items.forEach(x => {
	// 		// console.log("nilai",x[prop[i]].toLowerCase().indexOf(searchText));
	// 		if(x[prop[i]].toLowerCase().indexOf(searchText)>-1){
				

	// 		}
	// 	})
		
	// }

	console.log(items);
	// items.forEach(x=>{
	// 	for(let i in prop){
	// 		if(x[prop[i]].toLowerCase().indexOf(searchText)>-1){
	// 			console.log(x[prop[i]].toLowerCase().indexOf(searchText),x);


	// 		}
			
	// 	}
	// })

	// let z= items.filter(x=>
	// 	{
	// 		for(let i in prop){
	// 			if(x[prop[i]].toLowerCase().indexOf(searchText)>-1){
	// 				console.log(x[prop[i]].toLowerCase().indexOf(searchText),x);
	// 				return x
	// 			}

	// 		}
			
	// 	});
	return items.filter(x=>
		{
			for(let i in prop){
				if(x[prop[i]].toLowerCase().indexOf(searchText)>-1){
					console.log(x[prop[i]].toLowerCase().indexOf(searchText),x);
					return x
				}

			}
			
		});
	// console.log(z,'zzzz');

	


	// console.log('cek',items);
	 
	// return items.filter( it => {
	//       return it.toLowerCase().includes(searchText);
	//     });



	
	}






}