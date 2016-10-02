import {Component} from 'angular2/core';

@Component({
	selector: 'my-app', 
	templateUrl: 'partials/app.html'
})

export class AppComponent {
	name: string;
	artists: any;

	constructor(){ // Adjusts settings on the class when it is initialized.
		this.name = 'Tim'
		this.artists = [
			{
				name: 'Tim',
				school: 'Corona'
			},
			{
				name: 'Courtney',
				school: 'Corona'
			},
			{
				name: 'Harry Potter',
				school: 'Hogwarts'
			},
			{
				name: 'Annie',
				school: 'School of Hardknocks'
			}
		]
	}

	onClick(myName, artistElement) {
		this.name = myName;
		console.log(artistElement)
		artistElement.style.backgroundColor="#FECE4E"
	}

	addArtist(artist) {
		var newArtist = {
			name: artist,
			school: "Test School"
		}
		this.artists.push(newArtist);
	}

}