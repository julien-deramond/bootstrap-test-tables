import './table.css';

export const createTable = ({
  size,
  tableColor,
  trTableColor,
}) => {
  const sizeClass = size === 'small' ? 'table-sm' : '';
  const tableColorClass = tableColor ? `table-${tableColor}` : '';
  const trTableColorClass = trTableColor ? `table-${trTableColor}` : '';

  const section = document.createElement('section');
  section.className = 'storybook-table';

  const table = `
    <table class="table ${sizeClass} ${tableColorClass}">
      <thead>
        <tr class="${trTableColorClass}">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="${trTableColorClass}">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr class="${trTableColorClass}">
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr class="${trTableColorClass}">
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  `;

  section.insertAdjacentHTML('beforeend', table);

  return section;
};
