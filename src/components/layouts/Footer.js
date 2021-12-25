import React from 'react';
 
export default class Footer extends React.Component {
    render() {
        return (
<footer class="footer">
            <div class="container-fluid d-flex justify-content-between">
              <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © 2021</span>
      <strong>        <span class="float-none float-sm-end mt-1 mt-sm-0 text-end">Code Blaster</span></strong>
            </div>
          </footer>
        )
    }
}