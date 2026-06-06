import { Fragment } from 'react';
import { ArrowSvg, ButtonBlurFilter } from '@/svg';
import servicesData from '@/data/serviceData';
import Image from 'next/image';
import Link from "next/link";


const HomeMainService = () => {

  return (
    <div id="down" className="tp-service-area pt-120">
      <div className="container-fluid p-0">
        <div className="row gx-0">
          <div className="col-12">
            <div className="tp-service-title-box">
              <h2 className="tp-section-subtitle pre">Services</h2>
            </div>
          </div>
        </div>
        <div className="tp-service-pin">
          {servicesData.slice(0, 5).map((service) => {
            return (
              <div key={service.id} className="tp-service-item tp-service-panel">
                <div className="row">
                  <div className="col-xxl-3 col-xl-2 col-lg-1 col-md-1">
                    <div className="tp-service-number">
                      <span>0{service.id}.</span>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-7">
                    <div className="tp-service-content">
                      <h3 className="tp-section-title">
                        <Link className="tp_text_invert" href={service.link}>
                          {service.title}
                        </Link>
                      </h3>
                      <p>
                        {service.description?.split('\n').map((line, i, arr) => (
                          <Fragment key={`desc-${service.id}-${line}`}>
                            {line}
                            {i !== arr.length - 1 && <br />}
                          </Fragment>
                        ))}
                      </p>
                      <div className="tp-service-btn">
                        <Link href={service.link} className="tp-btn-black btn-red-bg">
                          <span className="tp-btn-black-filter-blur">
                            <ButtonBlurFilter filterId={`buttonFilter${service.id + 1}`} />
                          </span>
                          <span className="tp-btn-black-filter d-inline-flex align-items-center"
                            style={{ filter: `url(#buttonFilter${service.id + 1})` }}>
                            <span className="tp-btn-black-text">See Our Services</span>
                            <span className="tp-btn-black-circle">
                              <ArrowSvg />
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div className="tp-service-thumb text-end">
                      {service.image && <Image
                        className="tp_fade_anim"
                        data-fade-from="right"
                        data-delay=".2"
                        src={service.image}
                        alt={`${service.title} image`}
                        priority={service.id === 1}
                      />}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeMainService;
