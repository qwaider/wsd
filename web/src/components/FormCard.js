import React from 'react'

import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ModelNameDropDownMenu from './ModelNameDropDownMenu'

import { FormsyText } from 'formsy-material-ui/lib';
import Formsy from 'formsy-react';

const title = "Input a context and a target word to disambiguate";
const subtitle = "The system will identify a sense of the target word that best fits the context.";
const style = {
    card: {
        marginTop: 4,
    },
};

const FormCard = React.createClass({

    getInitialState() {
        return {
            canSubmit: false,
        };
    },

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    },

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    },

    notifyFormError(data) {
        console.error('Form error:', data);
    },

    render() {
        const {context, word, modelName, onValidSubmit, onRandomSample} = this.props;
        return (
            <Card style={style.card}>
                <CardTitle title={title} subtitle={subtitle}/>
                <CardText>
                    <Formsy.Form ref="form"
                        onValidSubmit={onValidSubmit}
                        onInvalidSubmit={this.notifyFormError}
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                    >
                        <FormsyText
                            name="context"
                            required
                            updateImmediately
                            value={context}
                            floatingLabelText="Disambiguation Context"
                            floatingLabelFixed={true}
                            fullWidth={true}
                        />
                        <FormsyText
                            name="word"
                            required
                            updateImmediately
                            value={word}
                            floatingLabelText="Word"
                            floatingLabelFixed={true}
                            fullWidth={true}
                        />
                        <ModelNameDropDownMenu
                            required
                            value={modelName}
                            floatingLabelText="Model based on"
                            floatingLabelFixed={true}
                            fullWidth={true}
                        />
                    </Formsy.Form>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Predict sense"
                        primary={true}
                        onTouchTap={() => {
                            this.refs.form.submit()
                        }}
                        disabled={!this.state.canSubmit}
                    />
                    <RaisedButton label="Random sample" onTouchTap={onRandomSample}/>
                </CardActions>
            </Card>
        )
    }
});

export default FormCard