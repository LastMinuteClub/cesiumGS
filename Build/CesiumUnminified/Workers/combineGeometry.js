define(['./PrimitivePipeline-c407b3b0', './createTaskProcessorWorker', './Transforms-2aac19b6', './Matrix3-c8b7aa00', './Check-751fa3ec', './defaultValue-bd2617a2', './Math-811d322a', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './GeometryPipeline-67b7ca3b', './AttributeCompression-912168aa', './EncodedCartesian3-4caecb11', './IndexDatatype-98f68afb', './IntersectionTests-9fbe3546', './Plane-b1c5796b', './WebMercatorProjection-6d693c6e'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix3, Check, defaultValue, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
