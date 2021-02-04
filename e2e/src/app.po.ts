import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ReactivePage { // clase de la página formularios reactive

  title: ElementFinder;
  nameinput: ElementFinder;
  //Se agregan los demas datos del formulario
  aplellidoinput: ElementFinder;
  emailoinput: ElementFinder;
  userinput: ElementFinder; 
  passinput: ElementFinder;
  reppassinput: ElementFinder;
  adressinput: ElementFinder;
  adress2input: ElementFinder;
  direccioninput: ElementFinder;
  //////
  saveButton: ElementFinder;
  addButton: ElementFinder;
  deleteButton: ElementArrayFinder;
  errorsText: ElementArrayFinder;

  constructor() {
    this.title = element(by.css('h4')); // obtenemos el elemento h4
    this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName
    ////
    this.aplellidoinput = element(by.css('input[formControlName=apellido]'));
    this.emailoinput = element(by.css('input[formControlName=correo]'));
    this.userinput = element(by.css('input[formControlName=usuario]'));
    this.passinput = element(by.css('input[formControlName=pass1]'));
    this.reppassinput = element(by.css('input[formControlName=pass2]'));
    this.adressinput = element(by.css('input[formControlName=estado]'));
    this.adress2input = element(by.css('input[formControlName=municipio]'));
    this.direccioninput = element(by.css('input[formGroupName=direccion]'));

    this.deleteButton = element.all(by.className('btn-danger'));
    ////
    this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    this.addButton = element(by.className('btn-success'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
  }

  navigateToReactivePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'reactive') as Promise<unknown>;
  }

  getTitleText(): Promise<string> { // obtiene el titulo de la página
    return this.title.getText() as Promise<string>;
  }

  setName(name: string): Promise<void>{ // escribe el el input name
    this.nameinput.clear();
    return this.nameinput.sendKeys(name) as Promise<void>;
  }
  //Se agregan los demas setters

  setApellido(apellido: string): Promise<void>{ // escribe el el input name
    this.aplellidoinput.clear();
    return this.aplellidoinput.sendKeys(apellido) as Promise<void>;
  }

  setEmail(email: string): Promise<void>{
    this.emailoinput.clear();
    return this.emailoinput.sendKeys(email) as Promise<void>;
  }

  setUser(user: string): Promise<void>{
    this.userinput.clear();
    return this.userinput.sendKeys(user) as Promise<void>;
  }

  setPassword(contraseña: string): Promise<void>{
    this.passinput.clear();
    return this.passinput.sendKeys(contraseña) as Promise<void>;
  }

  setReppassword(repcontraseña: string): Promise<void>{
    this.reppassinput.clear();
    return this.reppassinput.sendKeys(repcontraseña) as Promise<void>;
  }

  setAddres(estado: string): Promise<void>{
    this.adressinput.clear();
    return this.adressinput.sendKeys(estado) as Promise<void>;
  }

  setAdress2(ciudad: string): Promise<void>{
    this.adress2input.clear();
    return this.adress2input.sendKeys(ciudad) as Promise<void>;
  }
  /////

  getName(): Promise<string>{ // regresa el texto del input name
    return this.nameinput.getAttribute('value') as Promise<string>;
  }
  ///Getters
  getApellido(): Promise<string>{
    return this.aplellidoinput.getAttribute('value') as Promise<string>;
  }

  getEmail(): Promise<string>{
    return this.emailoinput.getAttribute('value') as Promise<string>;
  }

  getUser(): Promise<string>{
    return this.userinput.getAttribute('value') as Promise<string>;
  }

  getPassword(): Promise<string>{
    return this.passinput.getAttribute('value') as Promise<string>;
  }

  getReppassword(): Promise<string>{
    return this.reppassinput.getAttribute('value') as Promise<string>;
  }

  getAddres(): Promise<string>{
    return this.adressinput.getAttribute('value') as Promise<string>;
  }

  getAdress2(): Promise<string>{
    return this.adress2input.getAttribute('value') as Promise<string>;
  }
  ///

  clickSaveButton(): Promise<void>{ // presiona el botón guardar
    return this.saveButton.click() as Promise<void>;
  }

  clickAddButton(): Promise<void>{ // presiona el botón añadir
    return this.addButton.click() as Promise<void>;
  }

  clickdeleteButtonHobbies(): Promise<void>{ //Presiona el botón borrar dentro de hobbies
    return this.deleteButton.click() as Promise<void>;
  }

  deleteHobbieButtonIsPresent(): Promise<boolean>{ // comprueba si el botón borrar existe
    this.addButton = element(by.className('btn-danger'));
    return this.addButton.isPresent() as Promise<boolean>;
  }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }
}
