export class NavFakeDB{
	public static navmodel = [
			{
				'url':'/home',
				'title': 'home',
				'icon' : 'home'
				
			},
			{
				'url':'/dashboard',
				'title': 'dashboard',
				'icon' : 'dashboard',
				
			},
			{
				'url':'',
				'title': 'my admin',
				'icon' : 'assignment_turned_in',
				'hide' : true,
				'child':[
				 	{name:'Region','icon' :'place',list:['A','B','C']},
				 	{name:'Cluster', 'icon' :'pie_chart',list:['Health','Agraria']},
				 	{name:'Country','icon' :'insert_photo',list:['Etiopia','Afganistan','Indo']},
				 	{name: 'Organization','icon' :'people',list:['UN','UNESCO','UNICHEF']},
				 	{name: 'Facility','icon' :'build',list:['Army','Army2']}
				 ]
				
			},
			{
				'url':'',
				'title': 'my admin',
				'icon' : 'assignment_turned_in',
				'hide' : true,
				'child':[
				 	{name:'Region','icon' :'place',list:['A','B','C']},
				 	{name:'Cluster', 'icon' :'pie_chart',list:['Health','Agraria']},
				 	{name:'Country','icon' :'insert_photo',list:['Etiopia','Afganistan','Indo']},
				 	{name: 'Organization','icon' :'people',list:['UN','UNESCO','UNICHEF']},
				 	{name: 'Facility','icon' :'build',list:['Army','Army2']}
				 ]
				
			},
			// {
			// 	'url':'',
			// 	'title': 'my profile',
			// 	'icon' : 'account_circle'
			// },
			// {
			// 	'url':'',
			// 	'title': 'my stock',
			// 	'icon' : 'assessment'
				
			// },
			// {
			// 	'url':'',
			// 	'title': 'my project',
			// 	'icon' : 'zoom_in'
			// },

		]

}