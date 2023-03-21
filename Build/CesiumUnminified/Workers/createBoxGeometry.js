define(['./BoxGeometry-0c642ea3', './defaultValue-bd2617a2', './Transforms-2aac19b6', './Matrix3-c8b7aa00', './Check-751fa3ec', './Math-811d322a', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './GeometryOffsetAttribute-8caabdda', './VertexFormat-c9a4a9b8'], (function (BoxGeometry, defaultValue, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (defaultValue.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

}));
