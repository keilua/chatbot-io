import viewNav from './nav';
import viewbot from './bot';
import viewBot_Message from './bots_message';
import viewMessage from './message';
import viewBar from './bar';

export default (view) => (`
    <div class="row">
      <div class="col-12">${viewNav()}</div>
    </div>
    <div class="row">
      <div class="col-2">${viewbot()}</div>
        <div class="col-10 overflow-hidden bg-gradient">
          <div class="row conversations">
            <div class="col-6">${viewBot_Message('Hello, how can I assist you today?')}</div>
            <div class="col-6">${viewMessage()}</div>
            <div class="row messages">
              <div class="input-group">${viewBar()}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    ${view}
    </div>
`);
