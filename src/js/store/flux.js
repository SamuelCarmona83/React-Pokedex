const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "NO JUEGUEN LOL",
					background: "green",
					initial: "white"
				}
			],

			favorites : [ ]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: (pokemon) => {
				const store = getStore();
				if( !store.favorites.includes(pokemon) )
				setStore({ favorites: [ ...store.favorites, pokemon  ]})
			},

			deleteFavorite: (pokemon) => {
				const store = getStore();
				setStore({ favorites: [ ...store.favorites.filter( x=> x != pokemon)  ]})
			}

		}
	};
};

export default getState;
