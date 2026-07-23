// force fully making a variable as a type of something

let response: any = "1";

// let data = response.   => adding a dot will not change the type any but if we want to forcefully add we will simple add 'as' key word

let data = (response as string).charAt(0);
// this is forcefully adding a string type

//------**-------

type book = { name: string };

let bookstring = '{"name":"Atomic Habits"}';

let bookObject = JSON.parse(bookstring) as book;
// this is called type assertion

