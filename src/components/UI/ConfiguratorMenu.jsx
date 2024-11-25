import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import useTableStore from '../../stores/useTableStore'
import data from '../../data/configurator.json'

export default function Configurator() {
  const {
    bedOptions,
    setBedOptions,
    configuratorState
  } = useTableStore()

  const [currentStep, setCurrentStep] = useState(0)

  const handleStep = (e) => {
    if (currentStep == parseInt(e.currentTarget.parentElement.dataset.step)) {
      setCurrentStep(0)
    } else {
      setCurrentStep(parseInt(e.currentTarget.parentElement.dataset.step))
    }
  }

  const selectOption = (e) => {
    const optionType = e.currentTarget.parentElement.getAttribute('data-option-type')
    const optionValue = parseInt(e.currentTarget.getAttribute('data-option-value'))
    if (bedOptions[optionType] === optionValue) {
      if(optionType == 'mattress' || (bedOptions['decor'] == 1 && optionType == 'frame')) return
      setBedOptions(optionType, undefined)
    } else {
      setBedOptions(optionType, optionValue)
    }

    if(optionType == 'frame' || optionType == 'bedding') {
      setBedOptions('size', 'KK')
    }
  }

  const resetOptions = () => {
    setBedOptions('mattress', 1)
    setBedOptions('frame', undefined)
    setBedOptions('topper', false)
    setBedOptions('bedding', undefined)
    setBedOptions('decor', 0)
  }

  const menuVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, ease: [0.17, 0.84, 0.44, 1] },
      delay: 0.5,
    },
  }

  useEffect(() => {
    if(configuratorState == 'tutorial' ) {
      if(currentStep == 0) {
        setCurrentStep(1)
      }
    }
  }, [configuratorState, currentStep])

  return (
    <motion.div
      className='configurator'
      variants={menuVariants}
      initial='hidden'
      animate={configuratorState != 'loading' ? 'show' : 'hidden'}
    >
      {/* Step 1 - Mattress */}
      <div
        className={`configurator_step${currentStep == 1 ? ' active' : ''}`}
        data-step='1'
      >
        <div className='configurator_step_title' onClick={handleStep}>
          <div className='step'>1</div> <div className='label'>MATTRESS</div>
          <div className='selection'>
            <div className='name'>
              {data.mattress[bedOptions.mattress - 1] ? data.mattress[bedOptions.mattress - 1].name : ''}
            </div>
            <div className='price'>
              {data.mattress[bedOptions.mattress - 1] ? data.mattress[bedOptions.mattress - 1].price : ''}
            </div>
          </div>
          <button data-step='1'>
            <svg
              width='18'
              height='10'
              viewBox='0 0 18 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L9 9L17 1' stroke='black' />
            </svg>
          </button>
        </div>
        <div className='configurator_step_ctn' data-option-type='mattress'>
          <div className={`configurator_step_option --topper${ bedOptions.topper ? ' selected' : '' } `}
            data-option-type='topper'
            onClick={(e) => {
              setBedOptions('topper', !bedOptions.topper)
            }}
          >
            <div className='desc'>
              <div className='name'>N32 토퍼 매트리스 추가</div>
              {/* <div className='price'>246,000</div> */}
            </div>
            <div className='checkbox'></div>
          </div>
          {data.mattress.map((option, index) => (
            <div className={`configurator_step_option${ bedOptions.mattress == index + 1 ? ' selected' : '' } ${option.enabled ? 'enabled' : 'disabled'}`}
              data-option-value={index + 1}
              onClick={selectOption}
              key={index}
            >
              <div className='img'>
                <img src={`images/configurator/` + option.image}></img>
              </div>
              <div className='desc'>
                <div className='name'>{option.name}</div>
                <div className='price'>{option.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Step 2 - Frame */}
      <div className={`configurator_step${currentStep == 2 ? ' active' : ''}`} data-step='2' >
        <div className='configurator_step_title' onClick={handleStep}>
          <div className='step'>2</div> <div className='label'>FRAME</div>
          <div className='selection'>
            <div className='name'>
              {data.frame[bedOptions.frame - 1] ? data.frame[bedOptions.frame - 1].name : ''} </div>
            <div className='price'>
              {data.frame[bedOptions.frame - 1] ? data.frame[bedOptions.frame - 1].price : ''}
            </div>
          </div>
          <button data-step='2'>
            <svg
              width='18'
              height='10'
              viewBox='0 0 18 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L9 9L17 1' stroke='black' />
            </svg>
          </button>
        </div>
        <div className='configurator_step_ctn' data-option-type='frame'>
          {data.frame.map((option, index) => (
            <div
              className={`configurator_step_option${ bedOptions.frame == index + 1 ? ' selected' : '' }`}
              data-option-value={index + 1}
              onClick={selectOption}
              key={index}
            >
              <div className='img'>
                <img src={`images/configurator/` + option.image}></img>
              </div>
              <div className='desc'>
                <div className='name'>{option.name}</div>
                <div className='price'>{option.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Step 3 - Bedding */}
      <div
        className={`configurator_step${currentStep == 3 ? ' active' : ''}`}
        data-step='3'
      >
        <div className='configurator_step_title' onClick={handleStep}>
          <div className='step'>3</div> <div className='label'>BEDDING</div>
          <div className='selection'>
            <div className='name'>
              {data.bedding[bedOptions.bedding - 1] ? data.bedding[bedOptions.bedding - 1].name : ''}
            </div>
            <div className='price'>
              {data.bedding[bedOptions.bedding - 1] ? data.bedding[bedOptions.bedding - 1].price : ''}
            </div>
          </div>
          <button data-step='3'>
            <svg
              width='18'
              height='10'
              viewBox='0 0 18 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L9 9L17 1' stroke='black' />
            </svg>
          </button>
        </div>
        <div className='configurator_step_ctn' data-option-type='bedding'>
          {data.bedding.map((option, index) => (
            <div
              className={`configurator_step_option${ bedOptions.bedding == index + 1 ? ' selected' : '' }`}
              data-option-value={index + 1}
              onClick={selectOption}
              key={index}
            >
              <div className='img'>
                <img src={`images/configurator/` + option.image}></img>
              </div>
              <div className='desc'>
                <div className='name'>{option.name}</div>
                <div className='price'>{option.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`configurator_step_final ${ currentStep == 0 ? ' visible' : '' }`} >
        <button className='btn' onClick={resetOptions}>
          SHOP ALL PRODUCTS
        </button>
      </div>
    </motion.div>
  )
}