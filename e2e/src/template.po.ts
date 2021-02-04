import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class Templatepage {

    title: ElementFinder;
    nameinput: ElementFinder;
    //Se agregan los demas datos del formulario
    aplellidoinput: ElementFinder;
    emailoinput: ElementFinder;
    userinput: ElementFinder; 
    paisinput: ElementFinder;
    errorsText: ElementArrayFinder;
  
    constructor() {
      this.title = element(by.css('h4')); // obtenemos el elemento h4
      this.nameinput = element(by.name('nombre')); 
      this.aplellidoinput = element(by.name('apellido'));
      this.emailoinput = element(by.name('correo'));
      this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
      this.paisinput = element(by.cssContainingText('.pais-select','Cuba'))  
    }
  
    navigateToTemplatePage(): Promise<unknown> { // navega a la ruta /template
      return browser.get(browser.baseUrl + 'template') as Promise<unknown>;
    }
  
    getTitleText(): Promise<string> { // obtiene el titulo de la página
      return this.title.getText() as Promise<string>;
    }
  
    setName(name: string): Promise<void>{ // escribe el el input name
      this.nameinput.clear();
      return this.nameinput.sendKeys(name) as Promise<void>;
    }

    setApellido(apellido: string): Promise<void>{ // escribe el el input name
      this.aplellidoinput.clear();
      return this.aplellidoinput.sendKeys(apellido) as Promise<void>;
    }

    setPais(): Promise<void>{
      return this.paisinput.click() as Promise<void>;
    }
  
    setEmail(email: string): Promise<void>{
      this.emailoinput.clear();
      return this.emailoinput.sendKeys(email) as Promise<void>;
    }

    paisIsSelect(): Promise<boolean>{
      return this.paisinput.isSelected() as Promise<boolean>
    }
  
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

    getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
      return this.errorsText.get(indice).getText() as Promise<string>;
    }
}