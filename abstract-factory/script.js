class UIFactory {
    createCheckbox() {
        throw Error("This method should be overriden");
    }

    createButton() {
        throw Error("This method should be overriden");
    }

    render(elements = ['button', 'checkbox']) {
        let uiFactoryDiv = document.querySelector('.ui-factory');
        uiFactoryDiv.innerHTML = '';

        elements.forEach(element => {
            const method = `create${element.charAt(0).toUpperCase() + element.slice(1)}`;
            if (typeof this[method] === 'function') {
                const uiElement = this[method]();
                const renderedElement = uiElement.render();
                uiFactoryDiv.appendChild(renderedElement);
            } else {
                console.error(`Method ${method} not found or not a function.`);
            }
        });
    }
}


class LightThemeFactory extends UIFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckBox();
    }
}

class DarkThemeFactory extends UIFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckBox();
    }
}

class Button {
    render() {
        throw Error("This method should be overriden");
    }

    click() {
        throw Error("This method should be overriden");
    }
}

class CheckBox {
    render() {
        throw Error("This method should be overriden");
    }

    click() {
        throw Error("This method should be overriden");
    }
}

class LightButton extends Button {
    click () {

    }

    render() {
        let button = document.createElement('button');
        button.className = 'btn light-theme-btn';
        button.textContent = 'Light Button';
        return button;
    }
}

class DarkButton extends Button {
    click () {

    }

    render() {
        let button = document.createElement('button');
        button.className = 'btn dark-theme-btn';
        button.textContent = 'Dark Button';
        return button;
    }
}

class LightCheckBox extends CheckBox {
    click () {

    }

    render() {
        let checkbox = document.createElement('input');
        checkbox.className = 'light-theme-checkbox';
        checkbox.setAttribute('type', 'checkbox');
        return checkbox;
    }
}

class DarkCheckBox extends CheckBox {
    click () {

    }

    render() {
        let checkbox = document.createElement('input');
        checkbox.className = 'dark-theme-checkbox';
        checkbox.setAttribute('type', 'checkbox');
        return checkbox;
    }
}


const themeSelection = document.querySelector('#theme');

themeSelection.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    let themeFactory;

    switch(selectedTheme) {
        case 'dark' :
            themeFactory = new DarkThemeFactory();
            break;
        case 'light' :
            themeFactory = new LightThemeFactory();
            break;
        default :
            throw Error('No Theme Found');
    }

    themeFactory.render(['button']);
})
