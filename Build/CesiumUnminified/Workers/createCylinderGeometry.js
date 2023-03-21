define(['./CylinderGeometry-ff501922', './defaultValue-bd2617a2', './Transforms-2aac19b6', './Matrix3-c8b7aa00', './Check-751fa3ec', './Math-811d322a', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './CylinderGeometryLibrary-c6d88505', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './GeometryOffsetAttribute-8caabdda', './IndexDatatype-98f68afb', './VertexFormat-c9a4a9b8'], (function (CylinderGeometry, defaultValue, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, CylinderGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype, VertexFormat) { 'use strict';

  function createCylinderGeometry(cylinderGeometry, offset) {
    if (defaultValue.defined(offset)) {
      cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
    }
    return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
  }

  return createCylinderGeometry;

}));
