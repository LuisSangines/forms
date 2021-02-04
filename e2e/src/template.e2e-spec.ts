import { Templatepage } from './template.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const origFn = browser.driver.controlFlow().execute;
// esta función pone un retrazo de tiempo entre cada paso del controlFlow de protractor
browser.driver.controlFlow().execute = function stop() {
  const args = arguments;

  origFn.call(browser.driver.controlFlow(), () => {
    return protractor.promise.delayed(5); // tiempo de retraso entre cada paso
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Casos de ejemplo', () => {
    let page: Templatepage;

    beforeEach(() => { // Este método se ejecuta antes de cada prueba
      page = new Templatepage(); // crea un objeto de la página template forms
    });
    // si ponemos xit o xdescribe jasmine ignorara la prueba o el conjunto de pruebas
    it('Debe poder ir a la pagina de reactive forms', () => { // primera prueba de ejemplo
      page.navigateToTemplatePage();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'template'); // comprobamos que carge la página
    });
    it('Debe mostrar el título de la página', async () => {
      page.navigateToTemplatePage();
      const title = await page.getTitleText();
      await console.log(title); // podemos imprimir el texto en consola para debuggin
      expect(title).toEqual('Formularios Template'); // comprobamos que el titulo renderizado sea el que esperamos
      });

    it('Probar que el e-mail esta bien escrito', async () => {
        page.navigateToTemplatePage();
        page.setName('Fernando');
        const verificar = ['jorge', 'jorge@' , 'jorge@ho'];
        verificar.forEach(async (element) => {
          await page.setEmail(element);
          expect(page.getTextOfEspecificError(0)).toEqual('E-mail obligatorio');
        });
    });

    it('Debe probar la selección de un pais', async () => {
      page.navigateToTemplatePage();
      await page.setPais();
      expect(page.paisIsSelect).toBeTruthy();
    });

    afterEach(async () => { // Este método se ejecuta despues de cada prueba
        // Revisa si no hay errores severos emitidos por el navegador
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});