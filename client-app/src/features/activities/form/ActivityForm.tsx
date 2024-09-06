import { Button, Header, Segment } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import {v4 as uuid} from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';
import MyTextArea from './MyTextArea';
import MySelectInput from './MySelectInput';
import { categoryOptions } from '../../../app/common/form/options/categoryOptions';
import MyDateInput from './MyDateInput';

export default observer (function ActivityForm(){

    const {activityStore} = useStore();
    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();
    const [activity,setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required.'),
        description: Yup.string().required('Description is required.'),
        category: Yup.string().required('Category is required.'),
        date: Yup.string().required('Date is required.'),
        venue: Yup.string().required('Venue is required.'),
        city: Yup.string().required('City is required.'),
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]) 

    function handleFormSubmit(activity: Activity){
        if(!activity.id){
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
        
    }

    if(loadingInitial) return <LoadingComponent content='Loading Activity...' />

    return(
        <Segment clearing>
            <Header content='Activity Details' sub color='blue' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={activity} 
                onSubmit={values => handleFormSubmit(values)}>
                {({handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='title' placeholder='Title'></MyTextInput>
                        <MyTextArea rows={5} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <MyDateInput
                            placeholderText='Date'
                            name='date'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />
                        <Header content='Location Details' sub color='blue' />
                        <MyTextInput placeholder='City' name='city' />
                        <MyTextInput placeholder='Venue' name='venue' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} 
                            floated='right' 
                            positive type='submit' 
                            content='Submit'
                        />
                    </Form>
                )}
            </Formik>
            
        </Segment>
    )
})