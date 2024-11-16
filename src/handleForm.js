/**
 *  setupCustomFields function to add custom fields in the form
 *
 * @param {*} customFieldsContainer
 * @param {*} addCustomFieldButton
 * @param {*} updateFields
 */

const setupCustomFields = (
  customFieldsContainer,
  addCustomFieldButton,
  updateFields,
) => {
  addCustomFieldButton.addEventListener('click', () => {
    const addCustomFieldName = document.getElementById('customFieldName');
    if (
      !addCustomFieldName.value ||
      document.getElementById(addCustomFieldName.value)
    )
      return;

    const div = document.createElement('div');
    div.innerHTML = `<label for="${addCustomFieldName.value}">${addCustomFieldName.value}</label>
      <input
        type="text"
        id="${addCustomFieldName.value}"
        name="${addCustomFieldName.value}"
        required
      />`;
    customFieldsContainer.appendChild(div);
    customFieldsContainer.appendChild(document.createElement('br'));
    customFieldsContainer.appendChild(document.createElement('br'));
    updateFields.push(addCustomFieldName.value);
    addCustomFieldName.value = '';
  });
};

export { setupCustomFields };
