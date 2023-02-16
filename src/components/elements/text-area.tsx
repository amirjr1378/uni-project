import { digitsArToEn, digitsFaToEn } from '@persian-tools/persian-tools'
import parseClassNames from 'classnames'
import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

type PropType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

const TextArea = (props: PropType) => {
  const { className, ...restProps } = props
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value = digitsFaToEn(digitsArToEn(event.target.value))
    props?.onChange?.(event)
  }
  return (
    <textarea
      {...restProps}
      className={parseClassNames(
        'border-box pt-3 font-normal text-3.25',
        className || ''
      )}
      onChange={(event) => onChange(event)}
      value={props.value}
    />
  )
}
export default TextArea
