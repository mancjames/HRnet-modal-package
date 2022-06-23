# HRNet Modal component plugin

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/modal-package-hrnet)](https://www.npmjs.com/package/modal-package-hrnet) 

## Install

```bash
npm i modal-package-hrnet
```

## Usage

```jsx
import Modal from 'modal-package-hrnet';

function Example() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Modal
      setOpen={setModalIsOpen}
      message='Employee created'
      buttonText='Close'
    />
  )
}
```

## License

MIT © [MancJames](https://github.com/mancjames)