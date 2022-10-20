import React from 'react'
import styles from './form.module.css'
import Select from './fields/selectField'
import SimpleField from './fields/simpleField'
import Textarea from './fields/textArea'
import RichText from './fields/richText'
import ImageField from './fields/Image'

const FIELDS = {
  Select: Select,
  KeyText: SimpleField,
  RichText: Textarea,
  RichText2: RichText,
  Image: ImageField,
}

export default function Form({ fields }) {
  return (
    <div className={styles.fieldSet}>
      {Object.keys(fields).map((key, i) => {
        const type = fields[key].config.type
        const value = fields[key].value
        const child = fields[key]?.child || {}
        const label = fields[key].config.props.label
        const Field = FIELDS[type]
        return (
          <Field
            label={label}
            child={child}
            key={key + i}
            value={value}
            //onChange={context.onChange}
            //onRichTextUpdate={context.onRichTextUpdate}
            //onChangeImage={context.onChangeImage}
            name={key}
          />
        )
      })}
    </div>
  )
}