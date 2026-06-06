import { Fragment } from 'react';
import serviceBg from "../../../../public/assets/img/misc/bg-wrap-2.png"
import { ServicesDT } from "@/types/service-d-t";
import { ArrowSvg } from "@/svg";
import Image from 'next/image';
import Link from 'next/link';
 

interface ServicePropsDT {
    service: ServicesDT
}

const InnerServiceFourItem = ({ service }: ServicePropsDT) => {

    return (
        <div key={service.id} className="dgm-service-item p-relative tp_fade_anim">
            <div className="dgm-service-bg">
                <Image src={serviceBg} alt="service-bg" />
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="dgm-service-content-left d-inline-flex align-items-center">
                        <span className="service-icon">
                            {service.svgIcon && <service.svgIcon />}
                        </span>
                        <h3 className="dgm-service-title-sm">
                            <Link href={service.link} aria-label={`Read more about our ${service.title} specialized service`}>
                                {service.title.split(' ').map((word, i, arr) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Fragment key={`${word}-${i}`}>
                                        {word}
                                        {i < arr.length - 1 && <br />}
                                    </Fragment>
                                ))}
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="dgm-service-content-right d-flex align-items-center justify-content-between">
                        <p>{service.description}</p>
                        <Link className="dgm-service-link" href={service.link} aria-label={`Detailed information regarding ${service.title}`}>
                            <span>
                                <ArrowSvg width={14} height={14} strokeWidth={1.5} viewBox="0 0 14 14" pathValue="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" />
                                <ArrowSvg width={14} height={14} strokeWidth={1.5} viewBox="0 0 14 14" pathValue="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceFourItem;
