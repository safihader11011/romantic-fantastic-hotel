import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/UI/Antd/Button/Button';
import Box from 'components/UI/Box/Box';
import Text from 'components/UI/Text/Text';
import ProductCard from '../ProductCard/ProductCard';
const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle,
}) => {
  return (
    !!showButton && (
      <Box className="loadmore_wrapper" {...loadMoreStyle}>
        {loadMoreComponent ? (
          loadMoreComponent
        ) : (
            <Button loading={loading} onClick={handleLoadMore}>
              {buttonText || 'Load More'}
            </Button>
          )}
      </Box>
    )
  );
};

export default function SectionGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link,
  type
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);

  let showButton = data.length < totalItem;

  return (
    <>
      <Box className="grid_wrapper" {...rowStyle}>
        {data && data.length
          ? data.map(item => {
            return (
              <Box
                className="grid_column"
                width={columnWidth}
                // key={item.id}
                {...columnStyle}
              >
                <ProductCard link={link} type={type} {...item} />
              </Box>
            );
          })
          : null}

        {loading &&
          limits.map(item => (
            <Box
              className="grid_column"
              width={columnWidth}
              key={item.id}
              {...columnStyle}
            >
              {placeholder ? placeholder : <Text content="Loading ..." />}
            </Box>
          ))}
      </Box>

      {(showButton && type !== "Package") ? (
        <LoadMore
          showButton={showButton}
          handleLoadMore={handleLoadMore}
          loading={loading}
          buttonText={buttonText}
          loadMoreComponent={loadMoreComponent}
          loadMoreStyle={loadMoreStyle}
        />
      ) : null}
      {paginationComponent && (
        <Box className="pagination_wrapper">{paginationComponent}</Box>
      )}
    </>
  );
}

SectionGrid.propTypes = {
  data: PropTypes.array.isRequired,
  totalItem: PropTypes.number,
  columnWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  paginationComponent: PropTypes.element,
  handleLoadMore: PropTypes.func,
  loadMoreComponent: PropTypes.element,
  placeholder: PropTypes.element,
  loading: PropTypes.bool,
  limit: PropTypes.number,
  buttonText: PropTypes.string,
  rowStyle: PropTypes.object,
  columnStyle: PropTypes.object,
  loadMoreStyle: PropTypes.object,
};

SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px'],
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem',
  },
};
