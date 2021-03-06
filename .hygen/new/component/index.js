module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['elements', 'modules', 'compositions', 'layout', 'pages'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have style?',
      },
      {
        type: 'confirm',
        name: 'have_props',
        message: 'Is it have props?',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir, have_style, have_props } = answers
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`
      const abs_path = `src/components/${path}`
      const parent_path = `src/components/${category}/`
      const styles = have_style ? 'const styles = css``' : ''
      const type_annotate = have_props ? `React.VFC<${component_name}Props>` : 'React.VFC'
      const props = have_props ? '({})' : '()'
      const tag = 'div'
      return {
        ...answers,
        path,
        abs_path,
        parent_path,
        type_annotate,
        styles,
        props,
        tag,
      }
    })
  },
}
