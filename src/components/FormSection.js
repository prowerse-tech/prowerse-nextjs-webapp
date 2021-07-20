import React  from 'react';
import _, { map, rearg } from 'lodash';

import { classNames, markdownify } from '../utils';
import SectionBackground from './SectionBackground';
import FormField from './FormField';
import Map from './Map';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import  { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

class FormSection extends React.Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       locations: [{latitude: 23.1942647, longitude: 72.6063777},
    //               {latitude: 51.5004728, longitude: -0.421755},
    //               {latitude: 40.7585566, longitude: -74.0535681}]
    //     }
    //   }

    //   displayMarkers = () => {
    //     return this.state.locations.map((location, index) => {
    //       return <Marker key={index} id={index} position={{
    //        lat: location.latitude,
    //        lng: location.longitude
    //      }}
    //      onClick={() => console.log("You clicked me!")} />
    //     })
    //   }


    // constructor() {
    //     super();
    //     this.state = {
    //       lat: 23.1942647,
    //       lng: 72.6063777,
    //       zoom: 1,
    //     };
    //   }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const titleAlignX = _.get(section, 'title_align', 'left');
        const content = _.get(section, 'content');
        const contentAlignX = _.get(section, 'content_align', 'left');
        const backgroundColor = _.get(section, 'background_color', 'none');
        const backgroundImage = _.get(section, 'background_image');
        const paddingTop = _.get(section, 'padding_top', 'medium');
        const paddingBottom = _.get(section, 'padding_bottom', 'medium');
        const alignY = _.get(section, 'align_vert', 'top');
        const hasBorder = _.get(section, 'has_border');
        const formWidth = _.get(section, 'form_width', 'fifty');
        const formPosition = _.get(section, 'form_position', 'bottom');
        const formLayout = _.get(section, 'form_layout', 'stacked');
        const isCard = _.get(section, 'enable_card');
        const formId = _.get(section, 'form_id');
        const formAction = _.get(section, 'form_action');
        let formFields = _.get(section, 'form_fields', []);
        if (formLayout === 'inline') {
            formFields = formFields.slice(0, 1);
        }
        const submitLabel = _.get(section, 'submit_label');
        const formHoneypotInputId = formId + '-honeypot';
        const formHoneypotLabelId = formId + '-honeypot-label';
        const formHoneypotName = formId + '-bot-field';
        const isHorizontal = content && (formPosition === 'left' || formPosition === 'right');

        const mapStyles = {
            width: '97%',
            height: '90%',
            margin: '1475px 0',
            // padding: '10px'
          };


        // const position = [51.505, -0.09];
        // const position = [this.state.lat, this.state.lng];
        
        const handleSubmit = (e) => { 
            e.preventDefault()
            console.log('Sending')
          fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: e.target.name.value,
                  email: e.target.email.value,
                  message: e.target.message.value
              })
            }).then((res) => {
              console.log('Response received')
              if (res.status === 200) {
                console.log('Response succeeded!')
              }
              else {
                  console.log("else")
              }
              location.replace("/");
            })
          }

        return (
            <section
                id={sectionId}
                className={classNames('section', {
                    'has-border': hasBorder,
                    'has-cover': backgroundImage,
                    'bg-none': backgroundColor === 'none',
                    'bg-primary': backgroundColor === 'primary',
                    'bg-secondary': backgroundColor === 'secondary',
                    'pt-4': paddingTop === 'small',
                    'pt-6': paddingTop === 'medium' || paddingTop === 'large',
                    'pt-md-7': paddingTop === 'large',
                    'pb-4': paddingBottom === 'small',
                    'pb-6': paddingBottom === 'medium' || paddingBottom === 'large',
                    'pb-md-7': paddingBottom === 'large'
                })}
            >
                {backgroundImage && <SectionBackground section={section} />}
                {(title || subtitle) && (
                    <div
                        className={classNames('container', 'container--medium', 'mb-3', {
                            'text-center': titleAlignX === 'center',
                            'text-right': titleAlignX === 'right'
                        })}
                    >
                        {subtitle && <div className="section__subtitle">{subtitle}</div>}
                        {title && <h2 className="section__title mt-0">{title}</h2>}
                    </div>
                )}
                <div
                    className={classNames('container', {
                        'container--medium': !isHorizontal
                    })}
                >
                    <div
                        className={classNames('section__content', 'grid', {
                            'items-center': isHorizontal && alignY === 'middle',
                            'items-end': isHorizontal && alignY === 'bottom'
                        })}
                    >
                        {content && (
                            <div
                                className={classNames('section__copy', 'my-2', 'cell-12', {
                                    'cell-md-7': isHorizontal && formWidth === 'fourty',
                                    'cell-md-6': isHorizontal && formWidth === 'fifty',
                                    'cell-md-5': isHorizontal && formWidth === 'sixty',
                                    'text-center': contentAlignX === 'center',
                                    'text-right': contentAlignX === 'right'
                                })}
                            >
                                {markdownify(content)}
                            </div>
                        )}
                        <div
                            className={classNames('section__form', 'my-2', 'cell-12', {
                                'cell-md-5': isHorizontal && formWidth === 'fourty',
                                'cell-md-6': isHorizontal && formWidth === 'fifty',
                                'cell-md-7': isHorizontal && formWidth === 'sixty',
                                'order-first': formPosition === 'top' || formPosition === 'left'
                            })}
                        >
                            <form
                                name={formId}
                                id={formId}
                                {...(formAction ? ({ action: formAction }) : null)}
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                onChange={this.handleChange}
                                data-netlify-honeypot={formHoneypotName}
                                className={classNames({
                                    'form-inline': formLayout === 'inline',
                                    'card': isCard,
                                    'p-4': isCard,
                                    'p-sm-5': isCard
                                })}
                            >
                                <div className="sr-only">
                                    <label id={formHoneypotLabelId} htmlFor={formHoneypotInputId}>Don't fill this out if you're human:</label>
                                    <input aria-labelledby={formHoneypotLabelId} id={formHoneypotInputId} name={formHoneypotName} />
                                </div>
                                <input type="hidden" name="form-name" value={formId} />
                                <div
                                    className={classNames('form-content', {
                                        'flex': formLayout === 'inline',
                                        'flex-column': formLayout === 'inline',
                                        'flex-xs-row': formLayout === 'inline'
                                    })}
                                >
                                    {_.map(formFields, (field, index) => (
                                            <div
                                                key={index}
                                                className={classNames('form-group', {
                                                    'mb-2': formLayout === 'stacked',
                                                    'mb-1': formLayout === 'inline',
                                                    'mb-xs-0': formLayout === 'inline',
                                                    'flex-auto': formLayout === 'inline'
                                                })}
                                            >
                                                <FormField field={field} />
                                            </div>
                                    ))}
                                    <div
                                        className={classNames('form-submit', {
                                            'mt-3': formLayout === 'stacked',
                                            'mx-auto': formLayout === 'inline',
                                            'mr-xs-0': formLayout === 'inline',
                                            'ml-xs-1': formLayout === 'inline'
                                        })}
                                    >
                                        <button type="submit" className="btn btn--primary">{submitLabel}</button>
                                        <Map />
                                        {/* <Map center={position} zoom={this.state.zoom}>
                                            <TileLayer url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=cLadhsxO3z0w9gXzQ3Xa'
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>
                                            </TileLayer>
                                            <Marker position={position}>
                                            <Popup>
                                                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                                            </Popup>
                                            </Marker>
                                        </Map> */}
                                    </div>
                                </div>
                            </form>
                            <div>
                            </div>
                            {/* <Map
          google={this.props.google}
          zoom={2}
          style={mapStyles}
          initialCenter={{ lat: 23.1942647, lng: 72.6063777 }}
        >
          {this.displayMarkers()}
        </Map> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCAp-t_WKWx0sfpOM5_-5yeC9g-ZcrkWcI'
//   })(FormSection);

export default FormSection;