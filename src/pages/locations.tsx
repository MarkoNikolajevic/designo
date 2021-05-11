import LocationAddress from '../components/LocationAddress/LocationAddress';

export default function Locations() {
  return (
    <div>
      <div>
        <div>
          <picture>
            <source
              media='(min-width:75rem)'
              srcSet='/assets/locations/desktop/image-map-canada.png'
            />
            <img
              src='/assets/locations/tablet/image-map-canada.png'
              alt='Canada office map'
            />
          </picture>
        </div>
        <LocationAddress
          nation='Canada'
          office='Designo Central Office'
          street='3886 Wellington Street'
          city='Toronto, Ontario M9C 3J5'
          phone='+1 253-863-8967'
          mail='contact@designo.co'
        />
      </div>
      <div>
        <div>
          <picture>
            <source
              media='(min-width:75rem)'
              srcSet='/assets/locations/desktop/image-map-australia.png'
            />
            <img
              src='/assets/locations/tablet/image-map-australia.png'
              alt='Australia office map'
            />
          </picture>
        </div>
        <LocationAddress
          nation='Australia'
          office='Designo AU Office'
          street='19 Balonne Street'
          city='New South Wales 2443'
          phone='(02) 6720 9092'
          mail='contact@designo.au'
        />
      </div>
      <div>
        <div>
          <picture>
            <source
              media='(min-width:75rem)'
              srcSet='/assets/locations/desktop/image-map-united-kingdom.png'
            />
            <img
              src='/assets/locations/tablet/image-map-uk.png'
              alt='United Kingdom office map'
            />
          </picture>
        </div>
        <LocationAddress
          nation='United Kingdom'
          office='Designo UK Office'
          street='13  Colorado Way'
          city='Rhyd-y-fro SA8 9GA'
          phone='078 3115 1400'
          mail='contact@designo.uk'
        />
      </div>
    </div>
  );
}
